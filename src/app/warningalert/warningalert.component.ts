import {Component} from "@angular/core";

/**
 * styles allows the user to add css directly in this file.
 * Use `` to use multiline commands.
 * The same goes with template instead of templateUrl.
 *
 * I personally prefer using separated files, independently of the file size.
 * It is more modular. Do not mix both approaches. It is messy imo.
 * Check out successalert for my preferred approach.
 */
@Component({
  selector:'app-warningalert',
  templateUrl:'warningalert.component.html',
  styles:[`
  p{
    padding: 20px;
    border:1px solid grey;
    background-color: lightcoral;
    color:yellow;
    text-align: center;
  }
  `]
})

export class WarningalertComponent{

}
