"use client"

import BackButton from "@/components/BackButton";
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
    title: z.string().min(1,{message:"Title is required"}),
    Author: z.string().min(1,{message:"Author is required"}),
    Date: z.string().min(1,{message:"Date is required"}),
    body: z.string().min(1,{message:"Body is required"}),
})


interface editblogProps{
    params:{
        id:string,
    }
}

const EditSingleBlog = ({params}:editblogProps) => {
    const { toast } = useToast()

    const Blog = posts.find((item) => item.id === params.id)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            title: Blog?.title || "",
            body: Blog?.body || "",
            Author: Blog?.author || "",
            Date: Blog?.date || "",
        }
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) =>{
      console.log(data)
      toast({
        title: "Blog updated successfully",
      })
    }

    return (
        <>
            <BackButton text="Back" link="/posts" />
            <h1 className="text-2xl mb-4">Edit Post</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Title" className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Body</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter text" className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Author"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Author</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Author" className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Date"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Date</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Author" className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full dark:bg-white">Update</Button>
                </form>
            </Form>
        </> 
    );
}
 
export default EditSingleBlog;