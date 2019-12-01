import React from 'react';

const Gaslist = ({gasses}) => {
    return (
        <div>
            {gasses.map((gas) => (
                <div>
                    <table className="responsive-table">
                        <tbody>
                            <tr>
                                <td>{gas.name}</td>
                                <td>{gas.price}</td>
                                
                                <td>
                                    <button className="btn btn-small waves-effect waves-light hoverable red accent-4">Pesan</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}

export default Gaslist;