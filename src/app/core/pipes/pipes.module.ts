import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FindByName } from '@app/core/pipes/find-by-name.pipe';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [FindByName],
  exports: [FindByName],
  providers: []
})
export class PipesModule {}
