// class Brand<Tag> { private brand!: Tag; }

// type Nominal<Type, Tag> = Type & Brand<Tag>;
type Nominal<Type, Tag> = Type & { brand: Tag; };
// Reference : https://betterprogramming.pub/nominal-typescript-eee36e9432d2

interface SubmitEvent extends Event {
    submitter: HTMLElement;
}

interface HTMLFormElement {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any, no-undef
    onsubmit: (this: GlobalEventHandlers, event: SubmitEvent) => any | null;
}

export type { Nominal };
export type { SubmitEvent, HTMLFormElement };
