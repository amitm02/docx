import { File } from "file";
import { Compiler } from "./next-compiler";

export class Packer {
    private readonly compiler: Compiler;

    constructor() {
        this.compiler = new Compiler();
    }

    public async toBuffer(file: File): Promise<Buffer> {
        const zip = await this.compiler.compile(file);
        const zipData = (await zip.generateAsync({ type: "nodebuffer" })) as Buffer;

        return zipData;
    }

    public async toBase64String(file: File): Promise<string> {
        const zip = await this.compiler.compile(file);
        const zipData = (await zip.generateAsync({ type: "base64" })) as string;

        return zipData;
    }

    public async toBlob(file: File): Promise<Blob> {
        const zip = await this.compiler.compile(file);
        const zipData = (await zip.generateAsync({ type: "blob" })) as Blob;

        return zipData;
    }
}
