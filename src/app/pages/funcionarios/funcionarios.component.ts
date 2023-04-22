import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
})
export class FuncionariosComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function () {
      $(document).on('click', '.close', function () {
        $(this).parent().hide();
      });

      $('#add_row').on('click', function () {
        // Dynamic Rows Code

        // Get max row id and set new id
        var newid = 0;
        $.each($('#tab_logic tr'), function () {
          if (parseInt($(this).data('id')) > newid) {
            newid = parseInt($(this).data('id'));
          }
        });
        newid++;

        var tr = $('<tr></tr>', {
          id: 'addr' + newid,
          'data-id': newid,
        });

        // loop through each td and create new elements with name of newid
        $.each($('#tab_logic tbody tr:nth(0) td'), function () {
          var td;
          var cur_td = $(this);

          var children = cur_td.children();

          // add new td and element if it has a nane
          if ($(this).data('name') !== undefined) {
            td = $('<td></td>', {
              'data-name': $(cur_td).data('name'),
            });

            var c = $(cur_td).find($(children[0]).prop('tagName')).clone().val('');
            c.attr('name', $(cur_td).data('name') + newid);
            c.appendTo($(td));
            td.appendTo($(tr));
          } else {
            td = $('<td></td>', {
              text: $('#tab_logic tr').length,
            }).appendTo($(tr));
          }
        });

        // add the new row
        $(tr).appendTo($('#tab_logic'));

        $(tr)
          .find('td button.row-remove')
          .on('click', function () {
            $(this).closest('tr').remove();
          });
      });

      // Sortable Code
      var fixHelperModified = function (e, tr) {
        var $originals = tr.children();
        var $helper = tr.clone();

        $helper.children().each(function (index) {
          $(this).width($originals.eq(index).width());
        });

        return $helper;
      };

      $('.table-sortable tbody')
        .sortable({
          helper: fixHelperModified,
        })
        .disableSelection();

      $('.table-sortable thead').disableSelection();

      $('#add_row').trigger('click');
    });
  }

  public handleAlert() {
    alert('Alterações salvas!');
  }
}