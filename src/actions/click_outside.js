


export function clickOutside(node, callback) {
  console.log("clickOutside", node, callback);
  const handleClick = (event) => {
    console.log(node.contains(event.target));
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      callback();
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
