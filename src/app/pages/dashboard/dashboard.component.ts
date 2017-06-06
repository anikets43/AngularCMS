import 'rxjs/add/operator/map';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../services/session.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    isAddClicked: boolean;
    private formActive: boolean = false;
    private jsonFormSchema: string;
    private jsonFormValid: boolean = false;
    private jsonFormErrorMessage: string = 'Loading form...';
    private jsonFormObject: any;
    private jsonFormOptions: any = {
        addSubmit: true, // Add a submit button if layout does not have one
        loadExternalAssets: true, // Load external css and JavaScript for frameworks
        formDefaults: { feedback: true }, // SHow inline feedback icons
        debug: false,
    };
    private liveFormData: any = {};
    private formValidationErrors: any;
    private formIsValid: boolean = null;
    private submittedFormData: any = null;

    employeeList: Array<any> = [];


    employeeModel = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: Http,
        private storageService: StorageService
    ) { }

    ngOnInit() {
        this.employeeList = JSON.parse(this.storageService.get('EmployeeList'));
        console.log('Initial: ' + this.employeeList);
        this.http
            .get('data/employee.json')
            .map(schema => schema.text())
            .subscribe(schema => {
                this.jsonFormSchema = schema;
                this.generateForm(this.jsonFormSchema);
            });
    }

    onSubmit(data: any) {
        this.submittedFormData = data;
        let list = this.storageService.get('EmployeeList');

        let jsonArray = JSON.parse(list) || [];
        let record = jsonArray.find(x => x.id == data.employee.id);
        if (record) {
            this.deleteEmployee(data.employee.id);
        }

        list = this.storageService.get('EmployeeList');

        jsonArray = JSON.parse(list) || [];
        jsonArray.push(data.employee);
        this.storageService.put('EmployeeList', JSON.stringify(jsonArray));
        this.employeeList = JSON.parse(this.storageService.get('EmployeeList'));

        this.isAddClicked = false;
    }

    deleteEmployee(id) {
        let items = JSON.parse(this.storageService.get('EmployeeList'));
        items = items.filter(x => x.id !== id);
        this.storageService.delete('EmployeeList');
        this.storageService.put('EmployeeList', JSON.stringify(items));
        this.employeeList = JSON.parse(this.storageService.get('EmployeeList'));
    }

    onUpdate(id) {
        this.isAddClicked = true;
        let list = JSON.parse(this.storageService.get('EmployeeList'));
        let obj = list.find(x => x.id === id);
        obj = {
            'employee': obj
        };
        this.employeeModel = obj;
    }

    addNew() {
        this.employeeModel = {
            'employee': {
                'id': Math.round(Math.random() * 1000)
            }
        }
        this.isAddClicked = true;

    }

    get prettySubmittedFormData() {
        return JSON.stringify(this.submittedFormData, null, 2);
    }

    onChanges(data: any) {
        this.liveFormData = data;
    }

    get prettyLiveFormData() {
        return JSON.stringify(this.liveFormData, null, 2);
    }

    private isValid(isValid: boolean): void {
        this.formIsValid = isValid;
    }

    private validationErrors(data: any): void {
        this.formValidationErrors = data;
    }

    get prettyValidationErrors() {
        if (!this.formValidationErrors) { return null; }
        let prettyValidationErrors = '';
        for (let error of this.formValidationErrors) {
            prettyValidationErrors += (error.dataPath.length ?
                error.dataPath.slice(1) + ' ' + error.message : error.message) + '\n';
        }
        return prettyValidationErrors;
    }

    private generateForm(newFormString: string) {
        // if (!newFormString) { return; }
        this.formActive = false;
        this.liveFormData = {};
        this.submittedFormData = null;

        try {

            // Parse entered content as JSON
            if (newFormString)
                this.jsonFormObject = JSON.parse(newFormString);
            else
                this.jsonFormObject = null;
            this.jsonFormValid = true;
        } catch (jsonError) {
            try {
                let newFormObject: any = null;
                eval('newFormObject = ' + newFormString);
                this.jsonFormObject = newFormObject;
                this.jsonFormValid = true;
            } catch (javascriptError) {

                this.jsonFormValid = false;
                this.jsonFormErrorMessage = jsonError;
                return;
            }
        }
        this.formActive = true;
    }
}
