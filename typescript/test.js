

FilterComponenct {
  filters: []Filters

  render() {
    if filter.is_and {
      <FilterAndComponet></FilterAndComponet>
    } else if is_or {
      <FilterOrComponet></FilterOrComponet>
    } else {
      <FilterOpComponet></FilterOpComponet>
    }
  }
}


FilterAndComponet {
  filters: []FilterComponenct

  render() {
    for v in filters {
      <v></v>
    }
  }
}

FilterOrComponet {

}

FilterOpComxxx {

}
