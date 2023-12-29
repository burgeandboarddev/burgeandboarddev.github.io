import styles from '../styles/Styles.module.css';
import {NextPageWithLayout} from "./_app";
import Layout from "../components/layout";
import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PRODUCT_TYPES = [
  'Board',
  'Grazing Table',
  'Box',
  'Cups',
  'Brunch Box/Brunch Table',
  'Grazing Letter/Number',
]

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeIKB0gJZB5k0weTux1VrYoxZqKoyYBHrvEzmZHAEoouXkDig/formResponse'

const Contact: NextPageWithLayout = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [product, setProduct] = useState("")
  const [date, setDate] = useState(null as (Date | null))
  const [details, setDetails] = useState("")

  let handleSubmit = async (e) => {
    e.preventDefault()
    const data = new URLSearchParams();
    data.append('entry.1394526614', firstName)
    data.append('entry.1026529759', lastName)
    data.append('entry.147105571', email)
    data.append('entry.1254044019', product)
    data.append('entry.990922482_year', date.getFullYear().toString())
    data.append('entry.990922482_month', (date.getMonth() + 1).toString())
    data.append('entry.990922482_day', date.getDate().toString())
    data.append('entry.69462591', details)
    try {
      let res = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      })
      alert('Order placed, thank you!')
      // TODO: We need to use a CORS proxy so we can read the response and indicate if there was an error.
      // if (res.ok) {
      //   // TODO: success popup
      //   alert('Order placed, thank you!')
      // } else {
      //   // TODO: error popup
      //   alert('Order failed!')
      // }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className={`${styles.gallery_block} row text-center justify-content-center p-5 m-5`}>
        <div className={styles.block_title}>Order Form</div>
        <div className="col-5">
          <p>
            Please fill out the order form below. Include as many details as possible: the date of your event, how many
            guests, any dietary restrictions, etc. We will get back to you asap with availability and to finalize your
            order.
          </p>
          <p>
            If you have any more questions or need additional help, feel free to give us a quick call at
            <br/>
            <a href="tel:832-880-8751">832-880-8751</a>.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5">

          {/*<iframe*/}
          {/*  src="https://docs.google.com/forms/d/e/1FAIpQLSeIKB0gJZB5k0weTux1VrYoxZqKoyYBHrvEzmZHAEoouXkDig/viewform?embedded=true"*/}
          {/*  width="640" height="1300" frameBorder="0" marginHeight="0" marginWidth="0">Loading…*/}
          {/*</iframe>*/}

          <form>
            <div className="form-group p-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="e.g. Emily" className="form-control" value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}/>
            </div>

            <div className="form-group p-2">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="e.g. Smith" className="form-control" value={lastName}
                     onChange={(e) => setLastName(e.target.value)}/>
            </div>

            <div className="form-group p-2">
              <label htmlFor="email">Email *</label>
              <input type="text" placeholder="e.g. name@example.com" className="form-control" value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-group p-2">
              <label htmlFor="product">Select a product</label>
              <select id="product" className="form-control" value={product}
                      onChange={(e) => setProduct(e.target.value)}>
                <option value="" disabled={true}>Choose an option</option>
                {PRODUCT_TYPES.map(productName =>
                  <option key={productName} value={productName}>{productName}</option>
                )}
              </select>
            </div>

            <div className="form-group p-2">
              <label htmlFor="date">Select a date for your order</label>
              <br/> {/* TODO: Something weird with the datepicker css, need this explicit line break. */}
              <DatePicker selected={date} onChange={setDate} className="form-control"/>
            </div>

            <div className="form-group p-2">
              <label htmlFor="details">Give us more details for your order</label>
              <textarea id="details" className="form-control" value={details}
                        onChange={(e) => setDetails(e.target.value)}/>
            </div>

            <p className="text-center p-2">
              <a className={`btn btn-dark ${styles.subscribe_now_btn}`}
                 onClick={handleSubmit}>
                Send Order Form Request
              </a>
            </p>
          </form>

        </div>
      </div>
    </>
  );
}
export default Contact

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
