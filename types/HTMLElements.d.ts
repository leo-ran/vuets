/*!
 * @vuets/class 
 * (c) 2018 Ranyunlong
 * Released under the MIT License.
 */

export interface BaseEvent {
    onAbort?: (ev: UIEvent) => any;
    onaActivate?: (ev: Event) => any;
    onBeforeactivate?: (ev: Event) => any;
    onBeforecopy?: (ev: Event) => any;
    onBeforecut?: (ev: Event) => any;
    onBeforedeactivate?: (ev: Event) => any;
    onBeforepaste?: (ev: Event) => any;
    onBlur?: (ev: FocusEvent) => any;
    onCanplay?: (ev: Event) => any;
    onCanplaythrough?: (ev: Event) => any;
    onChange?: (ev: Event) => any;
    onClick?: (ev: MouseEvent) => any;
    onContextmenu?: (ev: PointerEvent) => any;
    onCopy?: (ev: ClipboardEvent) => any;
    onCuechange?: (ev: Event) => any;
    onCut?: (ev: ClipboardEvent) => any;
    onDblclick?: (ev: MouseEvent) => any;
    onDeactivate?: (ev: Event) => any;
    onDrag?: (ev: DragEvent) => any;
    onDragend?: (ev: DragEvent) => any;
    onDragenter?: (ev: DragEvent) => any;
    onDragleave?: (ev: DragEvent) => any;
    onDragover?: (ev: DragEvent) => any;
    onDragstart?: (ev: DragEvent) => any;
    onDrop?: (ev: DragEvent) => any;
    onDurationchange?: (ev: Event) => any;
    onEmptied?: (ev: Event) => any;
    onEnded?: (ev: Event) => any;
    onError?: (ev: ErrorEvent) => any;
    onFocus?: (ev: FocusEvent) => any;
    onInput?: (ev: Event) => any;
    onInvalid?: (ev: Event) => any;
    onKeydown?: (ev: KeyboardEvent) => any;
    onKeypress?: (ev: KeyboardEvent) => any;
    onKeyup?: (ev: KeyboardEvent) => any;
    onLoad?: (ev: Event) => any;
    onLoadeddata?: (ev: Event) => any;
    onLoadedmetadata?: (ev: Event) => any;
    onLoadstart?: (ev: Event) => any;
    onMousedown?: (ev: MouseEvent) => any;
    onMouseenter?: (ev: MouseEvent) => any;
    onMouseleave?: (ev: MouseEvent) => any;
    onMousemove?: (ev: MouseEvent) => any;
    onMouseout?: (ev: MouseEvent) => any;
    onMouseover?: (ev: MouseEvent) => any;
    onMouseup?: (ev: MouseEvent) => any;
    onMousewheel?: (ev: WheelEvent) => any;
    onMscontentzoom?: (ev: Event) => any;
    onMsmanipulationstatechanged?: (ev: Event) => any;
    onPaste?: (ev: ClipboardEvent) => any;
    onPause?: (ev: Event) => any;
    onPlay?: (ev: Event) => any;
    onPlaying?: (ev: Event) => any;
    onProgress?: (ev: ProgressEvent) => any;
    onRatechange?: (ev: Event) => any;
    onReset?: (ev: Event) => any;
    onScroll?: (ev: UIEvent) => any;
    onSeeked?: (ev: Event) => any;
    onSeeking?: (ev: Event) => any;
    onSelect?: (ev: UIEvent) => any;
    onSelectstart?: (ev: Event) => any;
    onStalled?: (ev: Event) => any;
    onSubmit?: (ev: Event) => any;
    onSuspend?: (ev: Event) => any;
    onSimeupdate?: (ev: Event) => any;
    onVolumechange?: (ev: Event) => any;
    onWaiting?: (ev: Event) => any;
}


interface BaseElement extends BaseEvent {
    style?: string | object;
    class?: string | object;
    className?: string | object;
    accesskey?: string;
    contenteditable?: boolean | 'true';
    contextmenu?: string;
    dir?: Dir;
    draggable?: boolean | 'true';
    dropzone?: Dropzone;
    hidden?: boolean | 'true' | 'hidden';
    id?: string;
    lang?: string;
    spellcheck?: boolean | 'true';
    tabindex?: number | string;
    title?: string;
}

type Dropzone = 'copy' | 'move' | 'link'
type Dir = 'ltr' | 'rtl' | 'auto'
type form_id = string
type form_name = string
type value = string
type Enctype = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'

interface Img extends BaseElement {
    src?: string;
    alt?: string;
    title?: string;
    [index: string]: any;
}


type Target = '_blank' | '_parent' | '_self' | '_top'
type Rel = 'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noreferrer' | 'prefetch' | 'prev' | 'search' | 'sidebar' | 'tag'
type Shape = 'rect' | 'rectangle' | 'circ' | 'circle' | 'poly' | 'polygon'
interface A extends BaseElement {
    href?: string;
    target?: Target;
    media?: string;
    type?: string;
}

interface Area extends BaseElement {
    alt?: string;
    coords?: string;
    target?: Target;
    hreflang?: string;
    media?: string;
    type?: string;
    rel?: Rel;
    shape?: Shape;
}

interface Audio extends BaseElement {
    autoplay?: 'autoplay';
    controls?: 'controls';
    loop?: 'loop';
    preload?: 'preload';
    src?: string;
}


interface Base extends BaseElement {
    href?: string;
    target?: Target;
}

interface Blockquote extends BaseElement {
    cite?: string;
}

interface Bdi extends BaseElement {
    dir?: Dir;
}

interface Bdo extends BaseElement {
    dir?: 'ltr' | 'rtl'
}


interface Button extends BaseElement {
    autofocus?: boolean | 'autofocus';
    disabled?: boolean | 'disabled';
    form?: string;
    formaction?: string;
    formenctype?: Enctype;
    formmethod?: 'get' | 'post';
    formnovalidate?: 'formnovalidate';
    formtarget?: Target | 'framename'
    name?: string;
    type?: 'button' | 'reset' | 'submit';
    value?: string;
}

interface Canvas extends BaseElement {
    height?: string | number;
    width?: string | number;
}

interface Col extends BaseElement {
    span?: number | string;
}

interface Command extends BaseElement {
    checked?: 'checked' | boolean;
    disabled?: 'disabled' | boolean;
    icon?: string;
    label?: string;
    radiogroup?: string;
    type?: 'checkbox' | 'command' | 'radio'
}

interface Del extends BaseElement {
    cite?: string;
    datetime?: string | Date;
}

interface Details extends BaseElement {
    open?: boolean | 'open'
}

interface Embed extends BaseElement {
    height?: number | string;
    src?: string;
    type?: string;
    width?: number | string;
}

interface Fieldset extends BaseElement {
    disabled?: 'disabled' | boolean;
    form?: form_id;
    name?: value;
}


interface Form extends BaseElement {
    'accept-charset'?: string;
    action?: string;
    autocomplete?: 'on' | 'off';
    enctype?: Enctype;
    method?: 'post' | 'get';
    name?: form_name;
    novalidate?: 'novalidate';
    target?: Target | 'framename' | string;
}

interface Html {
    manifest?: string;
    xmlns?: 'http://www.w3.org/1999/xhtml' | string;
}

interface Input extends BaseElement {
    autofocus?: boolean | 'autofocus';
    disabled?: boolean | 'disabled';
    form?: string;
    formaction?: string;
    formenctype?: Enctype;
    formmethod?: 'get' | 'post';
    formnovalidate?: 'formnovalidate';
    formtarget?: Target | 'framename'
    name?: string;
    value?: string;
    checked?: 'checked' | boolean;
    accept?: string;
    alt?: string;
    list?: string;
    max?: string | number | Date;
    maxlength?: string | number;
    min?: string | number | Date;
    multiple?: 'multiple';
    pattern?: '[0]' | '[1]' | '[2]' | '[3]' | '[4]' | '[5]' | '[6]' | '[7]' | '[8]' | '[9]';
    placeholder?: string;
    readonly?: 'readonly';
    required?: 'required';
    size?: string | number;
    src?: string;
    step?: string | number;
    type?: 'button' | 'checkbox' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'submit' | 'text' | 'time' | 'url' | 'week';
    width?: string | number;
}

interface Ins extends BaseElement {
    cite?: string;
    datetime?: string;
}

type rsa = string
type fieldname = string

interface Keygen extends BaseElement {
    autofocus?: 'autofocus';
    challenge?: 'challenge';
    disabled?: 'disabled';
    form?: form_name;
    keytype?: rsa;
    name?: fieldname;
}

type id = string

interface Label extends BaseElement {
    for: id;
    form: form_id;
}



export interface HTMLElements {
    img: Img;
    div: BaseElement;
    a: A;
    abbr: BaseElement;
    address: BaseElement;
    area: Area;
    article: BaseElement;
    aside: BaseElement;
    audio: Audio;
    b: BaseElement;
    bdi: Bdi;
    bdo: Bdo;
    base: Base;
    blockquote: Blockquote;
    body: Body;
    br: BaseElement;
    button: Button;
    canvas: Canvas;
    caption: BaseElement;
    cite: BaseElement;
    code: BaseElement;
    col: Col;
    colgroup: Col;
    command: Command;
    datalist: BaseElement;
    dd: BaseElement;
    del: Del;
    details: Details;
    dfn: BaseElement;
    dl: BaseElement;
    dt: BaseElement;
    em: BaseElement;
    embed: Embed;
    fieldset: Fieldset;
    figcaption: BaseElement;
    figure: BaseElement;
    footer: BaseElement;
    form: Form;
    h1: BaseElement;
    h2: BaseElement;
    h3: BaseElement;
    h4: BaseElement;
    h5: BaseElement;
    h6: BaseElement;
    header: BaseElement;
    hgroup: BaseElement;
    hr: BaseElement;
    html: Html;
    i: BaseElement;
    iframe: BaseElement;
    input: Input;
    ins: Ins;
    keygen: Keygen;
    kbd: BaseElement;
    label: Label;
    legend: BaseElement;
    li: Li;
    link: Link;
    map: Map;
    mark: BaseElement;
    menu: Menu;
    meta: Meta;
    meter: Meter;
    nav: BaseElement;
    object: TagObject;
    ol: Ol;
    optgroup: Optgroup;
    option: Option;
    output: Output;
    p: BaseElement;
    param: Param;
    pre: BaseElement;
    progress: Progress;
    q: Q;
    rp: BaseElement;
    rt: BaseElement;
    ruby: BaseElement;
    samp: BaseElement;
    script: Script;
    section: Q;
    select: Select;
    small: BaseElement;
    source: Source;
    span: BaseElement;
    strong: BaseElement;
    style: Style;
    sub: BaseElement;
    sup: BaseElement;
    summary: BaseElement;
    table: Table;
    tbody: BaseElement;
    td: BaseElement;
    textarea: Textarea;
    tfoot: BaseElement;
    th: Th;
    thead: BaseElement;
    time: Time;
    title: BaseElement;
    tr: BaseElement;
    track: Track;
    ul: BaseElement;
    var: BaseElement;
    video: Video;
}

interface Video extends BaseElement {
    autoplay?: 'autoplay';
    controls?: 'controls';
    height?: number | string;
    loop?: 'loop';
    preload?: 'preload';
    src?: string;
    width?: number | string;
}

interface Track extends BaseElement {
    default?: 'default';
    kind?: 'captions' | 'chapters' | 'descriptions' | 'metadata' | 'subtitles';
    label?: string;
    src?: string;
    srclang?: string;
}

interface Time extends BaseElement {
    datetime?: string | Date;
    pubdate?: string | Date;
}

interface Th extends BaseElement {
    colspan?: number | string;
    headers?: string;
    rowspan?: number | string;
    scope?: 'col' | 'colgroup' | 'row' | 'rowgroup';
}

interface Textarea extends BaseElement {
    autofocus?:'true' | 'false' | boolean;
    cols?: number | string;
    disabled?: 'true' | 'false' | boolean;
    form?: 'true' | 'false' | boolean;
    readonly?: 'true' | 'false' | boolean;
    required?: 'true' | 'false' | boolean;
    inputmode?: string;
    name?: string;
    rows?: number | string;
}

interface Table extends BaseElement {
    border?: number | string;
}

interface Style extends BaseElement{
    type?: 'text/css';
    media?: 'screen' | 'tty' | 'tv' | 'projection' | 'handheld' | 'print' | 'braille' | 'aural' | 'all';
    scoped?: 'scoped';
}

interface Source extends BaseElement {
    media?: string;
    src?: string;
    type?: number | string;
}

interface Select extends BaseElement {
    autofocus?: 'true'| 'false' | boolean;
    data?: string;
    disabled?: 'true'| 'false' | boolean;
    form?: 'true'| 'false' | boolean;
    multiple?: 'true'| 'false' | boolean;
    name?: string;
    size?: number | string;
}

interface Script extends BaseElement {
    async?: 'async';
    defer?: 'defer';
    type?: string;
    charset?: 'utf-8' | 'gbk' | 'bg2312' | string;
    src?: string;
}

interface Q extends BaseElement {
    cite?: string;
}

interface Progress extends BaseElement {
    max?: number| string;
    value?: number | string;
}

interface Param extends BaseElement {
    name?: string;
    type?: string;
    value?: string;
    valuetype?: 'data' | 'ref' | 'object';
}

interface Output extends BaseElement {
    for?: string;
    form?: string;
    name?: string;
}

interface Option extends BaseElement {
    disabled?: 'disabled' | boolean;
    label?: string;
    selected?: 'selected' | boolean;
    value?: string;
}

interface Optgroup extends BaseElement {
    label?: string;
    disabled?: 'disabled' | boolean;
}

interface Ol extends BaseElement{
    compact?: 'compact';
    reversed?: 'reversed';
    start?: number | string;
    type?: '1' | 'A' | 'a' | 'I' | 'i';
}

interface TagObject extends BaseElement {
    data?: string;
    form?: string;
    height?: string | number;
    name?: string;
    type?: string;
    usemap?: string;
    width?: string | number;
}

interface Meter extends BaseElement {
    high?: string | number;
    low?: string | number;
    max?: string | number;
    min?: string | number;
    optimum?: string | number;
    value?: string | number;
}

interface Meta extends BaseElement{
    charset?: string;
    content?: string;
    'http-equiv'?: 'content-type' | 'expires' | 'refresh' | 'set-cookie';
    name?: 'author' | 'description' | 'keywords' | 'generator' | 'revised' | 'others';
    scheme?: string;
}

interface Menu extends BaseElement {
    autosubmit?: 'true' | 'false' | boolean; 
    label?: string;
    type?: 'context' | 'toolbar' | 'list';
}

interface Map extends BaseElement {
    name: string;
}

interface Link extends BaseElement {
    href?: string;
    hreflang?: string;
    media?: string;
    rel?: 'alternate' | 'author' | 'help' | 'icon' | 'licence' | 'next' | 'pingback' | 'prefetch' | 'prev' | 'search' | 'sidebar' | 'stylesheet' | 'tag';
    sizes?: any;
    target?: Target | string;
    type?: string;
}

interface Li extends BaseElement {
    type?: 'A' | 'a' | 'I' | 'i' | '1' | 'disc' | 'square' | 'circle';
    value?: string;
}