import { visit } from "unist-util-visit";

export function remarkYoutubeEmbed() {
  return (tree: any) => {
    visit(tree, "paragraph", (node: any) => {
      const text = node.children
        ?.map((child: any) => {
          if (child.type === "text") return child.value;
          if (child.type === "link") return child.url;
          return "";
        })
        .join("");

      console.log("PARAGRAPH:", text);

      const match = text.match(
        /^\{%\s*embed\s+(.*?)\s*%\}$/
      );

      if (!match) return;

      node.data ||= {};

      node.data.hName = "youtube-embed";

      node.data.hProperties = {
        url: match[1],
      };

      node.children = [];
    });
  };
}