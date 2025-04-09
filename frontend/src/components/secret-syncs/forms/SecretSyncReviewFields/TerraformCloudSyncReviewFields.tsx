import { useFormContext } from "react-hook-form";

import { GenericFieldLabel } from "@app/components/secret-syncs";
import { TSecretSyncForm } from "@app/components/secret-syncs/forms/schemas";
import { TerraformCloudSyncScope } from "@app/hooks/api/appConnections/terraform-cloud";
import { SecretSync } from "@app/hooks/api/secretSyncs";

export const TerraformCloudSyncReviewFields = () => {
  const { watch } = useFormContext<TSecretSyncForm & { destination: SecretSync.TerraformCloud }>();
  const orgId = watch("destinationConfig.org");
  const destinationName = watch("destinationConfig.destinationName");
  const scope = watch("destinationConfig.scope");
  const category = watch("destinationConfig.category");

  return (
    <>
      <GenericFieldLabel label="Organization">{orgId}</GenericFieldLabel>
      {scope === TerraformCloudSyncScope.VariableSet && (
        <GenericFieldLabel label="Variable Set">{destinationName}</GenericFieldLabel>
      )}
      {scope === TerraformCloudSyncScope.Workspace && (
        <GenericFieldLabel label="Workspace">{destinationName}</GenericFieldLabel>
      )}
      <GenericFieldLabel label="Category">{category}</GenericFieldLabel>
    </>
  );
};
