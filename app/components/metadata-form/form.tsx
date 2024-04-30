import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import { formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { OriginalCreator } from "./fields/original-creator";
import { Filename } from "./fields/filename";
import { PartsRemediated } from "./fields/parts-remediated";
import { Language } from "./fields/language";
import { AccessibilitySummary } from "./fields/accessibility-summary";
import { Identifiers } from "./fields/identifiers";
import { RelatedIdentifiers } from "./fields/related-identifiers";
import { RemediatedBy } from "./fields/remediated-by";
import { SeriesTitle } from "./fields/series-title";
import { SeriesPosition } from "./fields/series-position";
import { Publisher } from "./fields/publisher";
import { RemediationComments } from "./fields/remediation-comments";
import { Title } from './fields/title'
import { RemediationComplete } from "./fields/remediation-complete";
import { Format } from "./fields/format";
import { Type } from "./fields/type";
import { AccessibilityFeatures } from "./fields/accessibility-features";
import { AccessibilityHazards } from "./fields/accessibility-hazards";
import { RemediationAspects } from "./fields/remediation-aspects";
import { SeriesType } from "./fields/series-type";
import { RemediationSource } from "./fields/remediation-source";



export const MetadataForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 justify-start">
                <OriginalCreator />
                <Filename />
                <RemediationComplete />
                <Format />
                <Language />
                <PartsRemediated />
                <RemediationComments />
                <Title />
                <Type />
                <AccessibilityFeatures />
                <AccessibilityHazards />
                <AccessibilitySummary />
                <Identifiers />
                <Publisher />
                <RelatedIdentifiers />
                <RemediationAspects />
                <RemediatedBy />
                <SeriesPosition />
                <SeriesTitle />
                <SeriesType />
                <RemediationSource />
            </form>
        </Form>
    );
};


