import '@abraham/reflection';
import './setup';
import './worker/player.worker';
import './extends/webview/alt-webview.prototype';
import './services/key-event.service';

export {
  OnServer,
  OnceServer,
  OnGui,
  GameEntityCreate,
  GameEntityDestroy,
  StreamSyncedMetaChange,
  SyncedMetaChange,
} from './decorators/event.decorator';

export { KeyUp, KeyDown } from './decorators/key-event.decorator';

export { EventService } from './services/event.service';
export { WebviewService } from './services/webview.service';
export { LoaderService } from './services/loader.service';

export type { WebviewInterface } from './extends/webview/webview.interface';

export type { constructor } from './types/constructor';

export { FrameworkEvent } from './constants/framework-event.constants';
export { AutoloaderEnums } from './constants/autoloader.constant';
export { EventEnum } from './constants/event.contstant';
export { LoaderServiceEnum, LoaderServiceQueueTypeEnum } from './constants/loader-service.constant';
export { ModuleLoaderEnum } from './constants/module-loader.constant';

export { On, Once, Cmd, eventServiceTarget, setEventServiceReflectMetaData } from './decorators/event-shared.decorator';
export { Autoload, After, Before, AutoloadAfter, AutoloadBefore } from './decorators/loader.decorator';
export { Module, Component } from './decorators/atlas-di.decorator';
export { Interval, EveryTick } from './decorators/timer.decorator';
export { StringResolver, getAtlasMetaData, registerDescriptor } from './decorators/helpers';

export { UtilsService } from './services/utils.service';
export { ModuleLoaderService } from './services/module-loader.service';
export { BaseLoaderService } from './services/base-loader.service';
export { BaseEventService } from './services/base-event.service';
export { CommandService } from './services/command.service';
export { LoggerService } from './services/logger.service';
export { TimerManagerService } from './services/timer-manager.service';

export { BasePool } from './pools/base.pool';

export { EventModel } from './models/event.model';
export { ValidateOptionsModel } from './models/validate-options.model';

export type { EventServiceInterface } from './interfaces/event-service.interface';
export type { RunningTimerInterface } from './interfaces/running-timer.interface';


export {
  JsonEntityModel,
  isNull,
  castToBoolean,
  castBooleanToString,
  castToNumber,
  castToString,
  castFromJson,
  HasOne,
  HasMany,
  Cast,
} from './libs/json-entity';
