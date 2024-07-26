// polyfills.js
import { Buffer } from 'buffer';
window.Buffer = Buffer; // Ajoutez Buffer globalement
import process from 'process';
window.process = process; // Ajoutez process globalement
