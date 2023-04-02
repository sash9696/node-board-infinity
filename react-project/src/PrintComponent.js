import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from 'react-bootstrap';

function PrintComponent() {

    let componentRef = useRef();

    return (
        <>
            <div id='print_component'>
                {/* button to trigger printing of the component */}
                <ReactToPrint
                    trigger={() => <Button>Print this out</Button>}
                    content={() => componentRef}
                />

                {/* component to be printed */}
                <div>
                    <ComponentToPrint ref={(el) => (componentRef = el)} />
                </div>
            </div>
        </>
    )
}

//component to be printed
class ComponentToPrint extends React.Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h2 style={{ color: "green" }} >Attendance</h2>
                <table className='table text-light table-dark'>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>johm@yahoo.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Peter</td>
                            <td>peter@yahoo.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PrintComponent