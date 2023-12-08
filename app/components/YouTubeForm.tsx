'use client'
import { useForm} from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
    username: string;
    email: string;
    channel: string;
}

export default function YouTubeForm() {
    const form= useForm<FormValues>();
    const { register, control, handleSubmit } = form;
    const onSubmit = (data: FormValues) => {
        console.log("Form submitted", data);
    }
    return  (
        <div className='w-full'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control p-3 w-2/5'>
                <label className="w-1/3" htmlFor="username">User name</label>
                <input className="border-2 ml-5 float-right" type="text" id="username" {...register("username")}/>
                </div>
                <div className='form-control p-3 w-2/5'>
                <label className='className="w-1/3' htmlFor="email">Email</label>
                <input type="text" className="border-2 ml-5 float-right" id="email" {...register("email")}/>
                </div>
                <div className='form-control p-3 w-2/5'>
                <label className="w-1/3" htmlFor="channel">Channel</label>
                <input type="text" className="border-2 ml-5 float-right" id="channel" {...register("channel")}/>
                </div>
                <div className='form-control p-3 w-2/5'>
                    <button className='float-right bg-green-500 p-5 border-2 border-r-amber-50'>Submit</button>
                </div>
            </form>
            <DevTool control={control} />
        </div>)
}