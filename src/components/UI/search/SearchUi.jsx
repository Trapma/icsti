import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';

export const SearchUi = ({ search }) => {
    const [textForm, setTextForm] = useState('')
    const find = () => {
        search(textForm)
    }

    return (
        <InputGroup className="mb-3">
            <FormControl
                value={textForm}
                onChange={(e) => { setTextForm(e.target.value) }}
                placeholder="Найти"
            // aria-label="Username"
            // aria-describedby="basic-addon1"
            />
            <Button onClick={find}><Search /></Button>
        </InputGroup>
    )
}
