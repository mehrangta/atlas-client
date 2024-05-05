import { BaseLoaderService } from './base-loader.service';
import { UtilsService } from './utils.service';
import { singleton } from 'tsyringe';

@singleton()
export class LoaderService extends BaseLoaderService {
  protected startLoading() {
    UtilsService.autoClearSetTimeout(() => {
      UtilsService.log('~lg~Start booting => ~w~Please wait...');
      this.startingSubject$.next(true);
      this.startingSubject$.complete();
    }, 125);
  }
}
