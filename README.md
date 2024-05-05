# alt:V Atlas Client
This is a client-only implementation of atlas framework with minor changes.

All the credits goes to the respected developers.

# Usage
```typescript
@Component()
export class Foo {

    constructor(
        private readonly eventService: EventService
    ) {}

    public heyToServer(): void {
        this.eventService.emitServer('hey')
    }

}

```
For more examples: [here](https://atlas.abstractmedia.de/client/)

# Credits
[Atlas](https://github.com/abstractFlo/atlas)