For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production.

By default, this template supports JSX syntax with Tailwind CSS classes, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.

This project uses React Router for navigation. Always use the router for multi-page applications and navigation between different views.

Use icons from lucide-react for logos.

Always separate code into multiple files for better code organisation.

Always run `yarn build` after implementing any changes to verify that your changes are working OK after.
Do not use `yarn dev` because user is running it in another terminal.

Always create nice images for backgrounds etc. unless the user explicitelly asked not to do it.
Create images using the image-generator MCP tool and icons using the icon-generator MCP tool.
Whenever you generate an image, it should be saved in the /assets folder of the project.


The generated images should be usable in code like:
import logo from "../assets/logo.png"; // adjust path relative to this file