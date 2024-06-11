import { type StructureBuilder } from "sanity/structure"

export const listItem = (S: StructureBuilder, title: string, id: string) => {
    return S.listItem()
        .title(title)
        .id(id)
        .child(
            S.document()
                .schemaType(id)
                .documentId(id)
        )
}