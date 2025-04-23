## Copilot Instructions

- Use **Chakra UI v2** as the primary UI component library.

- Follow the **Atomic Design** methodology when structuring components. Organize them under `src/components` as follows:

  - `atom/`: Basic building blocks that cannot be broken down further. Examples: `Button`, `Input`, `Text`, `Icon`.
  - `molecule/`: Combinations of atoms that form a functional unit. Examples: `InputWithLabel`, `CardHeader`, `FormField`.
  - `organism/`: Relatively complex components composed of molecules and/or atoms. Examples: `Navbar`, `UserProfile`, `SidebarMenu`.
  - `template/`: Page-level layout components that arrange organisms in specific ways but with placeholder content.
  - `page/`: Full pages composed of templates with actual content and logic.

- Place all components under `src/components/{atom|molecule|organism|template|page}` according to their design role.

- Store static images in the `public/images` directory and reference them using relative paths such as `/images/your-image.png`.
