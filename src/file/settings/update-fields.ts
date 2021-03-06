import { XmlAttributeComponent, XmlComponent } from "file/xml-components";
export interface IUpdateFieldsAttributesProperties {
    enabled: boolean;
}
export class UpdateFieldsAttributes extends XmlAttributeComponent<IUpdateFieldsAttributesProperties> {
    protected xmlKeys = {
        enabled: "w:val",
    };
}
export class UpdateFields extends XmlComponent {
    constructor(enabled: boolean = true) {
        super("w:updateFields");
        this.root.push(
            new UpdateFieldsAttributes({
                enabled,
            }),
        );
    }
}
