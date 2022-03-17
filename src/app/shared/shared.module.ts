import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { SetFontColorDirective } from './directives/set-font-color.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    SetFontColorDirective,
    CustomIfDirective
  ],
  exports: [
    ErrorMsgDirective,
    SetFontColorDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
