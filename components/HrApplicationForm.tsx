"use client";

import PublicForm from "@/components/PublicForm";
import type { FormConfig } from "@/lib/mappers/careers";

/**
 * Job application form. Fields, labels, dropdown options and texts come from the admin
 * (HR & Careers > Application form, GET /forms/career/config); submissions are stored by the
 * backend (POST /forms/career/submissions) and listed in the admin panel.
 */
export default function HrApplicationForm({ config }: { config: FormConfig | null }) {
  return (
    <PublicForm
      formKey="career"
      config={config}
      choiceFields={["postAppliedFor"]}
      otherFields={{
        qualification: { name: "otherQualification", placeholder: "Enter qualification" },
        teachingInstitution: { name: "otherInstitution", placeholder: "Enter institution" },
        postAppliedFor: { name: "otherPost" },
      }}
    />
  );
}
