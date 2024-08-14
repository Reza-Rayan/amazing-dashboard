// JwtService.ts
import axios from 'axios';
import jwtServiceConfig from './jwtServiceConfig';

class JwtService {
    private static readonly TOKEN_KEY = 'auth_token';

    // Save JWT token to local storage
    public static setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    // Get JWT token from local storage
    public static getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    // Remove JWT token from local storage
    public static removeToken(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    // Verify if the token is valid (basic check - you might need more robust validation)
    public static isTokenValid(): boolean {
        const token = this.getToken();
        if (!token) return false;

        try {
            const decodedToken = this.decodeToken(token);
            const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
            return decodedToken.exp > currentTime; // Check if token is not expired
        } catch (error) {
            console.error('Token verification failed:', error);
            return false;
        }
    }

    // Decode JWT token and return the payload
    public static decodeToken(token: string): any {
        try {
            const payload = token.split('.')[1];
            return JSON.parse(atob(payload));
        } catch (error) {
            console.error('Token decoding failed:', error);
            return null;
        }
    }

    // Get data from the token
    public static getTokenData(): any {
        const token = this.getToken();
        if (token) {
            return this.decodeToken(token);
        }
        return null;
    }

    // Sign in user
    public static async signIn(email: string, password: string): Promise<void> {
        try {
            const response = await axios.post(jwtServiceConfig.signIn, { email, password });
            this.setToken(response.data.token);
        } catch (error) {
            console.error('Sign in failed:', error);
            throw error;
        }
    }

    // Sign up user
    public static async signUp(email: string, password: string): Promise<void> {
        try {
            await axios.post(jwtServiceConfig.signUp, { email, password });
        } catch (error) {
            console.error('Sign up failed:', error);
            throw error;
        }
    }

    // Fetch new access token
    public static async fetchAccessToken(): Promise<void> {
        try {
            const response = await axios.post(jwtServiceConfig.accessToken, {}, {
                headers: { Authorization: `Bearer ${this.getToken()}` },
            });
            this.setToken(response.data.token);
        } catch (error) {
            console.error('Fetching access token failed:', error);
            throw error;
        }
    }

    // Update user info
    public static async updateUser(userData: object): Promise<void> {
        try {
            await axios.put(jwtServiceConfig.updateUser, userData, {
                headers: { Authorization: `Bearer ${this.getToken()}` },
            });
        } catch (error) {
            console.error('Updating user info failed:', error);
            throw error;
        }
    }
}

export default JwtService;
