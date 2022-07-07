import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';

export const SearchUi = () => {
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Найти"
            // aria-label="Username"
            // aria-describedby="basic-addon1"
            />
            <Button href="#"><Search /></Button>
        </InputGroup>
    )
}
