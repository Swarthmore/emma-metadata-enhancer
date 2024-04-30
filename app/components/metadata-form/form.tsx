import { useForm } from "react-hook-form"
import { Form } from "../ui/form"
import { z } from "zod"
import { formSchema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { OriginalCreator } from "./fields/original-creator"
import { Filename } from "./fields/filename"

export const MetadataForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <OriginalCreator />
                <Filename />
            </form>
        </Form>
    )
}

