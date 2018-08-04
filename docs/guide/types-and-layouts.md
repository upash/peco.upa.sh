# Types And Layouts

Each page in `source` directory has a type:

|Files|Page Type|Default Layout|Fallback Layout|
|---|---|---|---|
|(homepage)|index|index||
|source/_posts/*.md|post|post|page|
|source/*.md|page|page||
|(categories page)|category|category|index|
|(tags page)|tag|tag|index|

With `index` type you can access the post list, with `category` type you can access specific category of the post list.