import React from 'react';

export function Contact() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center '>
                        <h1 className='text-primary'>Any Queries</h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-5 d-flex justify-content-center'>
                        <img src="/Images/msg.png" height='300px' width='300px' />
                    </div>
                    <div className='col-md-6'>
                        <form>
                            <form>
                            <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Any Query</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Enter your query'></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Send Message</button>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}