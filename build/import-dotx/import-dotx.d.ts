/// <reference types="node" />
import * as JSZip from "jszip";
import { FooterReferenceType } from "../file/document/body/section-properties/footer-reference";
import { HeaderReferenceType } from "../file/document/body/section-properties/header-reference";
import { FooterWrapper, IDocumentFooter } from "../file/footer-wrapper";
import { HeaderWrapper, IDocumentHeader } from "../file/header-wrapper";
interface IDocumentRefs {
    headers: Array<{
        id: number;
        type: HeaderReferenceType;
    }>;
    footers: Array<{
        id: number;
        type: FooterReferenceType;
    }>;
}
interface IRelationshipFileInfo {
    id: number;
    targetFile: string;
    type: "header" | "footer" | "image";
}
export interface IDocumentTemplate {
    currentRelationshipId: number;
    headers: IDocumentHeader[];
    footers: IDocumentFooter[];
}
export declare class ImportDotx {
    private currentRelationshipId;
    constructor();
    extract(data: Buffer): Promise<IDocumentTemplate>;
    addImagesToWrapper(relationFile: IRelationshipFileInfo, zipContent: JSZip, wrapper: HeaderWrapper | FooterWrapper): Promise<void>;
    findReferenceFiles(xmlData: string): IRelationshipFileInfo[];
    extractDocumentRefs(xmlData: string): IDocumentRefs;
    parseRefId(str: string): number;
}
export {};
