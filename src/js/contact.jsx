import React from 'react';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.buttonFxn = this.buttonFxn.bind(this)
    }

    buttonFxn() {

        let scriptURL = 'https://script.google.com/macros/s/AKfycbzMZ8HgP4F7yTeG8anCHjPBLIyEOxguF0tnPnMS6S_cEUiqNco/exec'
        let form = document.forms['submit-to-google-sheet']
        form.addEventListener('submit', e => {
            console.log('clicked!')
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => window.location.replace('/thanks'))
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
    }
    
    render(){
        return(
            <div className='content-holder'>
            <div className='center'>
                <h2> Contact Me!</h2>
            </div>
            <br/>
            <div className='form-group' id='main'>
                <form name="submit-to-google-sheet">
                    <div className="form-row form-group">
                        <div className='col-md-6'>
                            <label for="firstName">First Name:
                            <input id="firstName" className='form-control' name="firstName" type="text"/>
                            </label>
                        </div>
    
                        <div className='col-md-6'>
                            <label for="lastName">Last Name:
                            <input id="lastName" className='form-control' name="lastName" type="text"/>
                            </label>
                        </div>
                    </div>
    
                    <div className='form-group'>
                        <label for="email">Email:
                        <input id="email" name="email" className='form-control' type="email"/>
                        </label>
                    </div>
    
                    <div className='form-group'>
                        <label for="note">Notes:
                        <textarea id="note" name="note" className='form-control' type="text"></textarea>
                        </label>
                    </div>
                    <input type="submit" className="btn btn-primary btn-block" onClick={this.buttonFxn}/>
    
                </form>
            </div>
        </div>
        
        )
    }
}