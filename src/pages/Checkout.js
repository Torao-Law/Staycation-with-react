import React, { Component } from 'react'
import { Fade } from 'react-reveal'

import Header from 'parts/Header'
import Button from 'elements/Button'
import Stepper, { Controller, MainContent, Meta, Numbering } from 'elements/Stepper'

import BookingFormInformation from 'parts/Checkout/BookingFormInformation'
import Payment from 'parts/Checkout/Payment'
import Completed from 'parts/Checkout/Completed'

import ItemDetails from '../json/itemDetails.json'

export default class Checkout extends Component {
    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            proofPayment: "",
            bankName: "",
            bankHolder: "",
        }
    }

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value,
            },
        })
    }

    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        const { data } = this.state

        const checkout = {
            duration: 3,
        }

        const steps = {
            bookingInformation: {
                title: "Booking Information",
                description: "Please fill up the blank fields below",
                content: (
                    <BookingFormInformation
                        data={data}
                        checkout={checkout}
                        ItemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                )
            },

            payment: {
                title: "Payment",
                description: "Kindly follow the instruction below",
                content: (
                    <Payment
                        data={data}
                        checkout={checkout}
                        itemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                )
            },

            completed: {
                title: "Yeay Completed",
                description: null,
                content: <Completed />
            }
        }

        return (
            <>
              <Header isCentered />

              <Stepper steps={steps}>
                  {(prevStep, nextStep, CurrentStep, steps) => (
                          <>
                            <Numbering data={steps} current={CurrentStep} style={{ marginBottom: 50}}/>

                            <Meta data={steps} current={CurrentStep}/>

                            <MainContent data={steps} current={CurrentStep}/>

                            { CurrentStep === "bookingInformation" && (
                                <Controller>
                                    {data.firstName !== "" &&
                                        data.lastName !== "" &&
                                        data.email !== "" &&
                                        data.phone !== "" && (
                                            <Fade>
                                                <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                                                    Continue to book
                                                </Button>
                                            </Fade>
                                        )}
                                        <Button className="btn" type="link" isBlock isLight href={`/properties/${ItemDetails._id}`} onClick={prevStep}>Cancel</Button>
                                </Controller>
                            )
                            }

                            {CurrentStep === "completed" && (
                                <Controller>
                                    <Button className="btn" type="link" isBlock isPrimary hasShadow href="">
                                        Back To Home
                                    </Button>
                                </Controller>
                            )}
                          </>
                      )
                  }
              </Stepper>
            </>
        )
    }
}
