import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Checkbox } from "@mui/material";
import { ThemeState } from '../index.jsx'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

export default function ContactForm() {
  const [ state, dispatch ] = React.useContext(ThemeState);
  
  const { register, handleSubmit, formState: { errors}, control, getValues } = useForm({
    defaultValues : {
      checkbox: false,
    }
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (data) => setShow(true);

  return (
    <form onSubmit={handleSubmit(handleShow)}>
      <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" defaultValue = {state.theme === 'nightmare' ? 'orange bird' : ''} {...register("name", { required: true })} />
          {errors.name?.type === 'required' && "Please enter a name."}
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        
        <input className="form-control" {...register("email", { required: true })} />
        {errors.email?.type === 'required' && "Please enter an email."}

        <div id="emailHelp" className="form-text">Please note I won't actually see this.</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        
        <input className="form-control" {...register("bodyText", { required: true })} />
        {errors.bodyText?.type === 'required' && "Please enter a message."}
      </div>
      <div className="mb-3 form-check">
        <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}/>
        <label className="form-check-label">I confirm I know this isn't a real form.</label><br/>
        {errors.checkbox?.type === 'required' && "Please confirm you know this isn't a real form."}
      </div>
      <input type="submit" value="Submit"/>
      <Modal show={show} onHide={handleClose}>
        <Container>
          <Col>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Name: {getValues("name")}<br/>
        Email: {getValues("email")}<br/>
        Message: {getValues("bodyText")}<br/><br/>
        <Image rounded fluid src="http://www.jordan-serna.com.s3.amazonaws.com/assets/nightmare_clue.png"/>
     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Col>
        </Container>
      </Modal>
      
  </form>
  );

}
