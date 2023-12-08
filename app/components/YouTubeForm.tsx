'use client'


export default function YouTubeForm() {
    return  (
        <div className='w-full'>
            <form>
                <div className='form-control p-3 w-2/5'>
                <label className="w-1/3" htmlFor="username">User name</label>
                <input className="border-2 ml-5 float-right" type="text" id="username" name="username"/>
                </div>
                <div className='form-control p-3 w-2/5'>
                <label className='className="w-1/3' htmlFor="email">Email</label>
                <input type="text" className="border-2 ml-5 float-right" id="email" name="email"/>
                </div>
                <div className='form-control p-3 w-2/5'>
                <label className="w-1/3" htmlFor="channel">Channel</label>
                <input type="text" className="border-2 ml-5 float-right" id="channel" name="channel"/>
                </div>
                <div className='form-control p-3 w-2/5'>
                    <button className='float-right bg-green-500 p-5 border-2 border-r-amber-50'>Submit</button>
                </div>

            </form>
        </div>)
}