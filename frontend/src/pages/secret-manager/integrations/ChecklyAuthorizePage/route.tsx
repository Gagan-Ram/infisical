import { createFileRoute, linkOptions } from "@tanstack/react-router";

import { ChecklyAuthorizePage } from "./ChecklyAuthorizePage";

export const Route = createFileRoute(
  "/_authenticate/_inject-org-details/_org-layout/secret-manager/$projectId/_secret-manager-layout/integrations/checkly/authorize"
)({
  component: ChecklyAuthorizePage,
  beforeLoad: ({ context, params }) => {
    return {
      breadcrumbs: [
        ...context.breadcrumbs,
        {
          label: "Integrations",
          link: linkOptions({
            to: "/secret-manager/$projectId/integrations",
            params
          })
        },
        {
          label: "Checkly"
        }
      ]
    };
  }
});
