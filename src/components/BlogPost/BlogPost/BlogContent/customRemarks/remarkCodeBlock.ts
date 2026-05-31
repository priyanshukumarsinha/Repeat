import { visit } from "unist-util-visit";

export function remarkCodeBlock() {
  return (tree: any) => {
    visit(tree, "code", (node: any) => {
      node.data ||= {};

      node.data.hName = "code-block";

      node.data.hProperties = {
        language: node.lang || "text",
        code: node.value,
      };
    });
  };
}