
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    /**
     * Writes a item to the session storage using the key and data.
     */
    put(key: string, data: any): void {
        sessionStorage.setItem(key, data);
    }

    /**
     * Gets a item from the session storage using the key.
     */
    get(key: string): any {
        return sessionStorage.getItem(key);
    }

    /**
     * Deletes a item from the session storage using the key.
     */
    delete(key: string): void {
        sessionStorage.removeItem(key);
    }

    /**
     * Clears the session storage.
     */
    clear(): void {
        return sessionStorage.clear();
    }
}