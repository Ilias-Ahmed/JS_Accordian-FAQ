// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select all accordion headers
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  // Loop through each accordion header
  accordionHeaders.forEach((header) => {
    // Add click event listener to each header
    header.addEventListener("click", () => {
      // Find the content associated with this header
      const content = header.nextElementSibling;

      // Toggle the 'active' class to show/hide content
      content.classList.toggle("active");

      /*This will add or remove the "active" class to the header element, which will change its appearance to indicate that it is currently open.*/
      header.classList.toggle("active");

      // Close other open accordion items
      accordionHeaders.forEach((otherHeader) => {
        // Skip the currently clicked header
        if (otherHeader !== header) {
          // Find the content of other headers
          const otherContent = otherHeader.nextElementSibling;

          // Close other accordion items
          otherContent.classList.remove("active");
          otherHeader.classList.remove("active");
        }
      });
    });
  });
});
