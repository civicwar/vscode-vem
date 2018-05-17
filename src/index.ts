
export class VisualStudioExManager {
    onInit() {
        console.log('[VSC-EM] Checking VSCode Extension PATH');
        const path = process.env;
        console.log(path);
    }
}