
import { MDCFormField } from '@material/form-field';
import { MDCCheckbox } from '@material/checkbox';
import { MDCSwitch } from '@material/switch';
import { MDCRadio } from '@material/radio';

const radio = new MDCRadio(document.querySelector('.md-radio'));
const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;
formField.input = radio;

const switchControl = new MDCSwitch(document.querySelector('.mdc-switch'));