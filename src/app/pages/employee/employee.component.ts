import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent implements AfterViewInit {
    title = 'app works!';
    formBuilder: any;

    formData = [];
    options = {
        disabledActionButtons: ['data', 'save'],
        defaultFields: [
            {
                className: 'form-control',
                label: 'First Name',
                placeholder: 'Enter your first name',
                name: 'firstname',
                type: 'text'
            },
            {
                className: 'form-control',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                name: 'lastname',
                type: 'text'
            },
            {
                type: 'date',
                label: 'Date Field',
                className: 'form-control',
                name: 'date-1496740243854'
            },
            {
                className: 'form-control',
                label: 'Email',
                placeholder: 'Enter your email',
                name: 'email',
                type: 'text'
            },
            {
                className: 'form-control',
                label: 'City',
                placeholder: '',
                name: 'city',
                type: 'text'
            },
            {
                className: 'form-control',
                label: 'Street',
                placeholder: '',
                name: 'street',
                type: 'text'
            },
            {
                className: 'form-control',
                label: 'Zip',
                placeholder: '',
                name: 'zip',
                type: 'text'
            },
            {
                type: 'autocomplete',
                label: 'Nationality',
                className: 'form-control',
                name: 'autocomplete-1496739566402',
                values: [
                    {
                        label: 'United States of America',
                        value: 'USA'
                    },
                    {
                        label: 'India',
                        value: 'IN'
                    },
                    {
                        label: 'Australia',
                        value: 'AUS'
                    }
                ]
            }, {
                label: 'Radio',
                name: 'select-1454862249997',
                type: 'radio-group',
                values: [
                    {
                        label: 'Male',
                        value: 'male',
                        selected: true
                    },
                    {
                        label: 'Female',
                        value: 'female'
                    }
                ]
            }]
    };

    ngAfterViewInit() {
        const fbEditor = document.getElementById('fb-editor');
        this.formBuilder = $(fbEditor).formBuilder(this.options);
    }

    onSubmit() {
        const keyValue = JSON.parse(this.formBuilder.actions.getData('json'));

        // keyValue.forEach(x => {
        //     this.formData.push({
        //         name: x.name,
        //         value: x.value
        //     });
        // });

        this.formData = keyValue;
        console.log(this.formData);
    }
}
