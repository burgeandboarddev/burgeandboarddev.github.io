import styles from '../styles/Styles.module.css';
import {NextPageWithLayout} from "./_app";
import Layout from "../components/layout";
import React from 'react';

const Contact: NextPageWithLayout = () => {

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
        <div className="col-2">
          <form>
            <div className="form-group p-2">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="e.g. Emily" className="form-control"/>
            </div>

            <div className="form-group p-2">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="e.g. Smith" className="form-control"/>
            </div>

            <div className="form-group p-2">
              <label for="email">Email *</label>
              <input type="text" placeholder="e.g. name@example.com" className="form-control"/>
            </div>

            <div className="form-group p-2">
              <label for="product">Select a product:</label>
              <select id="product" className="form-control">
                <option value="" disabled="">Choose an option</option>
                <option value="Board">Board</option>
                <option value="Grazing Table">Grazing Table</option>
                <option value="Box">Box</option>
                <option value="Cups">Cups</option>
                <option value="Brunch Box/Brunch Table">Brunch Box/Brunch Table</option>
                <option value="Grazing Letter/Number">Grazing Letter/Number</option>
              </select>
            </div>

            <div className="form-group p-2">
              <label for="date">Select a date:</label>
              <input type="date" id="date" placeholder="Select a date" className="form-control"/>
            </div>

            <div className="form-group p-2">
              <label for="details">Give us more details for your order:</label>
              <textarea id="details" className="form-control"/>
            </div>

            <p className="text-center p-2">
              <a className={`btn btn-dark ${styles.subscribe_now_btn}`}>
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
