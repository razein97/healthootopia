import { writable } from 'svelte/store';

export const drawer = writable(false);
export const navbarTitle = writable({ title: '' });