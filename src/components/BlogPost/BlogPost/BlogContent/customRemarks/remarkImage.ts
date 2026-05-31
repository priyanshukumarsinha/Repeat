import { visit } from "unist-util-visit";

export function remarkImage() {
  return (tree: any) => {
    visit(tree, "image", (node: any) => {
      node.data ||= {};

      node.data.hName = "blog-image";

      node.data.hProperties = {
        src: node.url,
        alt: node.alt ?? "",
      };
    });
  };
}