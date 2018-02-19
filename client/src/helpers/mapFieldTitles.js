const mapFieldTitles = title => {
    switch (title) {
      case "evolutionRequirements":
        return "evolution Requirements";

      case "maxCP":
        return "max CP";

      case "maxHP":
        return "max Hp";

      case "fleeRate":
        return "flee rate";

      default:
        return title;
    }
  };

  export default mapFieldTitles;
