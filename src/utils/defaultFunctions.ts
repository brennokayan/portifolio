export function RollToRef(ref: string) {
    // window !== undefined ? () => props.window.location.href = ref : undefined;
    window.location.href = ref;
    // alert(ref);
  }