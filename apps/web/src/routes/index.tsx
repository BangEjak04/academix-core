import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@repo/ui/components/ui/button";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="">
      <div className="font-sans">Hello "/"!</div>
      <div className="font-mono">Hello "/"!</div>
      <Button>Hello</Button>
    </div>
  );
}
