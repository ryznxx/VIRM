proc readStr*(location: string): string =
   let output: string = readFile(location)
   return output
